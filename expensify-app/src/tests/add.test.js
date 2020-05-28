const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add twooo numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should greet', () => {
    const result = generateGreeting('Chuck');
    expect(result).toBe('Hello Chuck!');
})