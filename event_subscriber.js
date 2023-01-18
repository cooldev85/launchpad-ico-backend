
const EventControler = require('./controllers/eventController');
const {Launchpad} = require('./contracts');

const handleEvent =  () => {
    console.log("Event Subscribe Started")
    setInterval(async () => {
        const pools = await EventControler.getPoolsList();
        for(var i=0; i<pools.length; i++) {
            const row = pools[i];
            const chainId = row['chainId'];
            const token = row['tokenAddress'];
            const decimals = row['token']['decimals'];
            try{
                if(token && Launchpad[chainId]){
                    let info = await Launchpad[chainId].getPoolInfo(token)
                    let totalSold = Number(info['totalSold']) / 10**decimals;
                    let closeTime = Number(info['closeTime']) * 1000;
                    let withdrawTime = Number(info['withdrawTime']) * 1000;
                    EventControler.updatePool(token, closeTime, withdrawTime, totalSold)
                }
            } catch ( ex) {
                console.log('ex= '+ ex)       
            }
        }
    }, 10000);
}

module.exports = {handleEvent}