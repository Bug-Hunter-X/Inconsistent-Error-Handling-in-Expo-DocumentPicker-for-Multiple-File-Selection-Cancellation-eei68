# Inconsistent Error Handling in Expo DocumentPicker for Multiple File Selection Cancellation

This repository demonstrates an uncommon bug in Expo's DocumentPicker API when selecting multiple files and the user cancels the selection. The issue lies in the inconsistent structure of the error object returned when the selection is cancelled, making it challenging to handle this scenario reliably.

## Bug Description

When using DocumentPicker.getDocumentAsync() to select multiple files, the promise rejects when the user cancels the selection. However, the format of the rejected error object is inconsistent. In some cases it includes a 'message' field, and in others, it may only contain a 'name' field. This inconsistency makes it hard to write robust error handling that can always identify a cancellation.

## Reproduction Steps

1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the app using Expo Go or a simulator.
4. Initiate the file picker and select multiple files. 
5. Cancel the file selection. Observe the inconsistency of the error object.