import set from "lodash/set";

export function transformMessages(messages: Record<string, any>) {
    const transformed: Record<string, any> = {};
    Object.entries(messages).forEach(([key, value]) => {
        set(transformed, key, value);
    });
    return transformed;
}