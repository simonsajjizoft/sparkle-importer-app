import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  constructor() {
  }

 validateProduct(tree) {
   let errors = [];
   let isValid = true;
   let applicableTypes = ["Leaflet", "Dosage", "Component","Accessories"]; // added Accessories
   let loopThroughNodes = (node) => {
     let isApplicabe = applicableTypes.find(item=> { 
       return item == node["type"] 
     });
     if(isApplicabe){
       let formValues = node["formValues"];
         if(!formValues["height"]){
           errors.push(`Height value missing on ${node["name"]}`);
           isValid= false;
         }

         if(!formValues["width"]){
           errors.push(`Width value missing on ${node["name"]}`);
           isValid= false;
         }

         if(!formValues["depth"]){
           errors.push(`Depth value missing on ${node["name"]}`);
           isValid= false;
         }

         if(!formValues["weight"]){
           errors.push(`Weight value missing on ${node["name"]}`);
           isValid= false;
         }

         if(!formValues["unitCount"]){
           errors.push(`Unit value missing on ${node["name"]}`);
           isValid= false;
         }

         if(!formValues["avgWeight"]){
           errors.push(`Average weight value missing on ${node["name"]}`);
           isValid= false;
         }
     }
     if(node["children"].length > 0){
       node["children"].forEach((item)=>loopThroughNodes(item));
     } else{
       return true;
     }
   }
   loopThroughNodes(tree);
   return {
     isValid,
     errors
   }
 }
}
