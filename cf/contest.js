var axios = require('axios');

async getContestList = (gym,state) =>{
	let url="https://codeforces.com/api/contest.list"
	if(gym===false)
		url=contest.concat('?gym=false')
	let result=null;
	await axios
	.get(url)
	.then(res => result=res);
	if(state===null || state===undefined)
		return result;
	let customResult={"status":"OK",result:[]};
	result.map(res => {
		if(res.phase===state)
			customResult.result.push(res);
	})
	return customResult;
}

