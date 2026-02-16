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

function ensureDataDir() {
    const dir = path.dirname(USAGE_FILE);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

export function getUsage(): UsageData {
    ensureDataDir();
    if (!fs.existsSync(USAGE_FILE)) {
        fs.writeFileSync(USAGE_FILE, JSON.stringify(DEFAULT_USAGE, null, 2));
        return DEFAULT_USAGE;
    }

    try {
        const data = JSON.parse(fs.readFileSync(USAGE_FILE, 'utf8')) as UsageData;
        const today = new Date().toLocaleDateString('en-US');

        if (data.lastReset !== today) {
            const newData = { ...data, count: 0, lastReset: today };
            fs.writeFileSync(USAGE_FILE, JSON.stringify(newData, null, 2));
            return newData;
        }

        return data;
    } catch (e) {
        return DEFAULT_USAGE;
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

    fs.writeFileSync(USAGE_FILE, JSON.stringify(data, null, 2));
    return data;
}
