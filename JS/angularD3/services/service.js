//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.



app.service('dataRpm', function () {
    this.getData = function () {
        return data;
    };

    this.insertData = function (data1, data2) {
        data.push({
            data1: data1,
            data2: data2,
        });
    };

});

var data = [{'data1': 1, 'data2': 2}];



angular.module('d3', [])
  .factory('d3Service', [function(){
    var d3;

    var svg = d3.select('#graph').append('svg')
        .attr('fill', 'black');

    var circles = svg.selectAll('circle').data(data);
        
    circles.enter().append('circle') 
        .attr('cx', data.data1) 
        .attr('cy', data.data2)
        .attr('width', 10)
        .attr('height', 10)
        .attr('fill', 'white');
    return d3;
  }]);




app.directive('graph', function($parse, $window){
   return{
      restrict:'EA',
      template:"<svg width='500' height='500'></svg>",
       link: function(scope, elem, attrs){
           var exp = $parse(attrs.chartData);

           var d3 = $window.d3;
           var rawSvg=elem.find('svg');
           var svg = d3.select(rawSvg[0]);

            d3.select('#graph').append('svg');

            var circles = svg.selectAll('circle').data(data);

            var xScale = d3.scale.linear().range([0, 500]);
            var yScale = d3.scale.linear().range([500, 0]);

            xScale.domain(d3.extent(data, function (d){ return d.data1; }));
            yScale.domain(d3.extent(data, function (d){ return d.data2; }));

            circles.enter().append('circle') 
                .attr('cx', function (d){ return xScale(d.data1); }) 
                .attr('cy', function (d){ return yScale(d.data2); })
                .attr('r', 10)
                .attr('color', 'black');
           }

   };
});






