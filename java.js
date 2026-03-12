let input_text =document.querySelector("#input_text");
let add_work = document.querySelector("#add_work");
let work_list =document.querySelector("#work_list");
const Do_work = ()=>{
    let new_li =document.createElement("li");
   work_list.appendChild(new_li);
    let work = input_text.value;
    let task_text = document.createElement("span");
    task_text.innerText = work;
    let create_button=document.createElement("button");
    create_button.textContent="X";
    new_li.append(task_text);
    new_li.append(create_button);
    new_li.style.display="flex";
    new_li.style.justifyContent="space-between";
    input_text.value="";
    save_data();
    work_list.addEventListener("click",(e)=>{
         if(e.target.tagName==="BUTTON"){
           e.target.parentElement.remove();
           save_data();
         }else if(e.target.tagName==="SPAN" || e.target.tagName==="LI"){
          const target = e.target.tagName === "LI" ? e.target.querySelector("span") : e.target;
           target.classList.toggle(`checked`);
           save_data();
         }
       });
 };
 add_work.addEventListener("click",()=>{
   if(input_text.value.trim()===""){
      alert("please Enter work");
    }else{
      Do_work();
      save_data();
    }   
 });
 input_text.addEventListener("keypress", (e) => {
   if (e.key === "Enter") {
       add_work.click();
      save_data();
   }
});
  let save_data=()=>{
    localStorage.setItem("data",work_list.innerHTML);
    
  }
  let show_data=()=>{
    work_list.innerHTML= localStorage.getItem("data");
  }

  show_data();
