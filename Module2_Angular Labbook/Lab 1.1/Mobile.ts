export class Mobile
{
mobileId:number;
mobileName:string;
mobileCost:number;
constructor(mobileId:number,mobileName:string,mobileCost:number)
{
this.mobileId=mobileId;
this.mobileName=mobileName;
this.mobileCost=mobileCost;
}
printMobileDetails():void
{
console.log("MobileId: " + this.mobileId);  
console.log("MobileName: " + this.mobileName); 
console.log("MobileCost:" +this.mobileCost);
}
}