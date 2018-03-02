var storage; 
var listOfItems = "";
var task;
var tasks = [];
var $ = function(id){
    "use strict";
    return window.document.getElementById(id);
    
    }

var displayTaskList = function(){
    "use strict";
    if(tasks.length === 0) {
        storage = localStorage.getItem("tasks") || "";
        if (storage.length > 0){
            task = storage.split('|');
        }
    }
    if (tasks.length > 0) {
        tasks.sort();
        list = tasks.join("\n");
    }
     $("tasklist").value = list;
    
};
 var addToTaskList = function() {
     "use strict";
     task = $("task");
     if (task.value === ""){
         window.alert("Please enter a task");
         } else{
             task.push(tasks.value);
             localStorage.tasks = tasks.join("|");
             task.value = "";
             displayTaskList();
         }
 };

var clearTaskList = function (){
    "use strict";
    tasks.length = 0;
    localStorage.tasks = "";
    $("taskList").value = "";
};
