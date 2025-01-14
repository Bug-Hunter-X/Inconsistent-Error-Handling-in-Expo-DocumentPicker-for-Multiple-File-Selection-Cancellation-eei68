This bug occurs when using the Expo DocumentPicker API to select multiple files.  The API returns a promise that resolves to an array of file objects. However, if the user cancels the file selection, the promise rejects with an error, but the error object is not consistently formatted, leading to unpredictable handling.