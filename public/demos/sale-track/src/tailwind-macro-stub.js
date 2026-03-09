// Stub: tailwind.macro is not supported in Vite builds.
// This provides a passthrough that returns an empty string for styled-components.
const tw = (...args) => {
    if (Array.isArray(args[0])) {
        return args[0].join('');
    }
    return '';
};

export default tw;
