import HelloWorld from '../utils/HelloWorld'

it ("Should return 'Hello Spencer'", ()=>{

    const result = HelloWorld();

    expect(result).toBe("Hello Spencer");
});