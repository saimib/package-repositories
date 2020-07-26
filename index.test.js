const creat_UUID = require('./index')
const create_UUID = require('./index')

test('create_UUID creates a new uuid', () => {
    expect(create_UUID()).toEqual(expect.stringMatching(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i));
})