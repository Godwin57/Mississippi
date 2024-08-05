export function isValidEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export function isValidPassword(password: string): boolean {
    if (password.length <= 8 || password.length >= 12) {
        return false;
    }
    const regex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return regex.test(password);
}
