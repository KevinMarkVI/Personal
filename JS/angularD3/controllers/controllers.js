
app.controller('controller', function ($scope, dataRpm) {

    init();

    function init() {
        $scope.data = dataRpm.getData();
    }

    $scope.insertData = function () {
        var data1 = $scope.newData.data1;
        var data2 = $scope.newData.data2;
        dataRpm.insertData(data1, data2);
        $scope.newData.data1 = '';
        $scope.newData.data2 = '';
    };
    $scope.data = data;
});
