const session = require('supertest-session')
const app = require('../Server.js')

const agent = session(app);

const Pendiente=require('../Controller/pendiente.js')
const {IdCreator}=require('../utils.js')
const pendienreNock=new Pendiente(IdCreator(),'hacer la tarea');

describe('Test api lista pendientes', () => {
    describe(' /pendiente', () => {
        describe(' /GET()', () => {
            it('response with 200',()=>agent.get('/pendiente/0').expect(200));
            it('return an object with a Pendiente ',
            ()=>agent.get('/pendiente').then((res)=>{
                expect(typeof res.body.result).toEqual('object');
            }))

        })
    })
})
