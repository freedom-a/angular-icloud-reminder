var reminder=angular.module('reminder',[]);
reminder.controller('rdCtrl',['$scope',function($scope){
	var d=localStorage.data;
	$scope.shijianliebiao=d?JSON.parse(d):[];
	$scope.clistindex=0;
	$scope.colors=['purple','gray','blue','yellow','brown','pink','orange'];
	$scope.addshijian=function(index){
		var data={
			name:'新列表'+($scope.shijianliebiao.length+1),
			color:$scope.colors[$scope.shijianliebiao.length%7],
			item:[]
		};
		$scope.shijianliebiao.push(data);
		localStorage.data=JSON.stringify($scope.shijianliebiao);
	}
	$scope.showlist=function(index){
		$scope.clistindex=index;
	}
     $scope.clear=function(){
     	localStorage.clear();
     	location.reload();
     }
     $scope.zz=function(ev){
     	ev.stopPropagation();
     }
     $scope.deleteItem=function(){
     	var r=[];
     	for(var i=0;i<$scope.shijianliebiao.length;i++){
     		if(i!=$scope.clistindex){
     			r.push($scope.shijianliebiao[i]);
     		}
     	}
     	$scope.shijianliebiao=r;
     	$scope.clistindex=0;
     }
     $scope.addtodo=function(){
     	var cu=$scope.shijianliebiao[$scope.clistindex].item;
     	var data={title:'新条目'+(cu.length+1),isDone:false};
     	cu.push(data);
     	localStorage.data=JSON.stringify($scope.shijianliebiao);
     }
     $scope.deletetodo=function(index){
     	var r=[];
     	var cu=$scope.shijianliebiao[$scope.clistindex].item;
     	for(var i=0;i<cu.length;i++){
     		if(i!=index){
     			r.push(cu[i]);
     		}
     	}
     	$scope.shijianliebiao[$scope.clistindex].item=r;
     	localStorage.data=JSON.stringify($scope.shijianliebiao);
     }
     $scope.save=function(){
     	localStorage.data=JSON.stringify($scope.shijianliebiao);
     }
}])