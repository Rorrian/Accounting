/**
 * Converts the error object to a string
 * @param error
 * */
export function getErrorMessage(error: any): string | null {
	return error?.message ? String(error.message) : null;
}
