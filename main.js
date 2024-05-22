Hooks.on('diceSoNiceRollStart', (messageId, context) => {
    console.log(messageId);
    console.log(context);
});
Hooks.on('diceSoNiceRollComplete', (messageId) => {
    console.log(messageId);
});
