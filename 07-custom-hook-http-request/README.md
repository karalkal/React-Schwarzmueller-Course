# Rationale

The starting app has components with similar logic
<App> GETs all data from DB and sets state of loading/error
<NewTask> POSTs mew data and, again, sets state of loading/error:

- `const [isLoading, setIsLoading] = useState(false);` which is set to true just before the request is sent and until a response (array, null or error) is received.
- `const [error, setError] = useState(null);` works similarly
- The request logic can also be abstracted, even though one req is GET, the other req is POST.

## Firebase set up

Start in test mode
Your data is open by default to enable quick setup. However, you must update your security rules within 30 days to enable long-term client read/write access.
