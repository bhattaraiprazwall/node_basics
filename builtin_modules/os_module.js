const os=require('os');

//os.uptime()
const systemUpTime=os.uptime();
console.log(systemUpTime);

//os.userInfo()
const userInfo=os.userInfo();
console.log(userInfo);

// storing some other information about my windowsOS in this object:
const otherInfo={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
};
console.log(otherInfo);