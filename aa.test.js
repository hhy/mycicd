const aa= require('./aa');

test('add 2 & 32 eq 34', ()=>{
    expect(aa.add(2, 32)).toBe(34);
});