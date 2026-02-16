import fs from 'fs';
import path from 'path';

const USAGE_FILE = path.join(process.cwd(), 'data/usage.json');

interface UsageData {
    count: number;
    limit: number;
    lastReset: string;
}

const DEFAULT_USAGE: UsageData = {
    count: 0,
    limit: 20,
    lastReset: new Date().toLocaleDateString('en-US')
};

// In-memory fallback if filesystem is read-only
let memoryUsage: UsageData = { ...DEFAULT_USAGE };

function ensureDataDir() {
    try {
        const dir = path.dirname(USAGE_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    } catch (e) {
        console.warn('Failed to ensure data directory:', e);
    }
}

export function getUsage(): UsageData {
    try {
        ensureDataDir();
        if (!fs.existsSync(USAGE_FILE)) {
            try {
                fs.writeFileSync(USAGE_FILE, JSON.stringify(DEFAULT_USAGE, null, 2));
            } catch (e) {
                // Ignore write fail, use memory
            }
            return memoryUsage;
        }

        const data = JSON.parse(fs.readFileSync(USAGE_FILE, 'utf8')) as UsageData;
        const today = new Date().toLocaleDateString('en-US');

        if (data.lastReset !== today) {
            data.count = 0;
            data.lastReset = today;
            try {
                fs.writeFileSync(USAGE_FILE, JSON.stringify(data, null, 2));
            } catch (e) {
                // Ignore write fail
            }
        }

        // Sync memory usage with file data
        memoryUsage = { ...data };
        return data;
    } catch (e) {
        console.error('Error in getUsage:', e);
        return memoryUsage;
    }
}

export function incrementUsage(actualCount?: number, actualLimit?: number): UsageData {
    const data = getUsage();

    if (actualLimit !== undefined) {
        data.limit = actualLimit;
    }

    if (actualCount !== undefined) {
        data.count = actualCount;
    } else {
        data.count += 1;
    }

    try {
        fs.writeFileSync(USAGE_FILE, JSON.stringify(data, null, 2));
    } catch (e) {
        console.warn('Failed to save usage to file, keeping in memory:', e);
    }

    memoryUsage = { ...data };
    return data;
}
