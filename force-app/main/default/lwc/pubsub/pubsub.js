const events = {};
 
const pubsub = {
    register: (eventName, callback) => {
        events[eventName] = events[eventName] || [];
        events[eventName].push(callback);
    },
    unregister: (eventName, callback) => {
        if (events[eventName]) {
            events[eventName] = events[eventName].filter(cb => cb !== callback);
        }
    },
    fire: (eventName, payload) => {
        if (events[eventName]) {
            events[eventName].forEach(callback => callback(payload));
        }
    }
};
 
export default pubsub;