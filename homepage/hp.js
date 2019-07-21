var app=angular.module('todoApp',[]);

app.controller('todoList', function($scope){
    $scope.todos = [{text:'Learn AngularJS', done:true},{text:'build an AngularJS App', done:false}];

    $scope.addTodo = function(){
        if($scope.todoText !== ''){
            $scope.todos.push({text:$scope.todoText, done:false});
            $scope.todoText='';
        }

    }
})