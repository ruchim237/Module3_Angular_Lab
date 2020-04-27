import {Mobile} from './Mobile'
class BasicPhone extends Mobile
{
mobileType:string;
constructor(mobileId:number,mobileName:string,mobileCost:number,mobileType:string)
{
super(mobileId,mobileName,mobileCost);
this.mobileType=mobileType;
}
printMobileDetails():void
{
console.log("MobileId: " + this.mobileId);  
console.log("MobileName: " + this.mobileName); 
console.log("MobileCost:" +this.mobileCost);
console.log("MobileType:" +this.mobileType);
}
}
var p=new BasicPhone(388,"Nokia102",3200,"BasicPhone");
p.printMobileDetails();