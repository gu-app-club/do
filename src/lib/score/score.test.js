import { total } from "./index.js";

test('total can add up an array', () => {
    const t = total([{
        html: 0.5,
        css: -1
    }, {
        html: 0.5,
        css: 1
    }])

    expect(t.html).toBe(1);
    expect(t.css).toBe(0);
})