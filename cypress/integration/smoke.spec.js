

describe("smoke test",()=>{
    it("Makes sure the welcom message come up",()=>{
        crypto.visit("http://localhost:3000")
        .contains('Hello world')
    })
})