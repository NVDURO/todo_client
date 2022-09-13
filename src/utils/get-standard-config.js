export const getStandardConfig = (params = {}) => {
    const { body, method, headers } = params;
    return {
        method: method || "GET",
        body: body ? JSON.stringify(body) : undefined,
        headers: headers || new Headers({ "Content-Type": "application/json" }),
    };
};
