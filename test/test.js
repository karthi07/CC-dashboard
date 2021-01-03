const { assert } = require('chai')

const Vpf = artifacts.require('./VPF.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Decentragram', ([deployer, author, tipper]) => {
  let vpf

  before(async () => {
    vpf = await Vpf.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await vpf.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await vpf.name()
      assert.equal(name, 'VPF')
    })
  }),

  describe('vpf', async() => {
      let result, vpfCount;
      
  
      before(async () => {
        result = await vpf.createVPF()
        vpfCount = await vpf.vpfCount()
      })
  
      it('create Image', async()=>{
        
        let vpfs = await vpf.vpfs(0)
        const event = result.logs[0].args
              //console.log(testImage)
        //assert.equal(event.id.toNumber(), vpfCount.toNumber(),'count id matches')
        assert.equal(event.ethAmt,'$ 34,346.00', 'eth amount mathces')
  
      })
    })  

})