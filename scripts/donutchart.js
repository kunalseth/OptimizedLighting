/**
 * Created by Kunal on 15-Mar-16.
 */
(function(d3) {
    var dataset = [
        { label: 'Space Cooling', count: 13 },
        { label: 'Lighting', count: 11 },
        { label: 'Water Heating', count: 9 },
        { label: 'Space Heating', count: 9},
        { label: 'Refrigeration', count: 7 },
        { label: 'Television', count: 7 },
        { label: 'Dryers', count: 4 },
        { label: 'Furnace Fans', count: 3 },
        { label: 'Computers', count: 2 },
        { label: 'Cooking', count: 2 },
        { label: 'Dishwashers', count: 2 },
        { label: 'Freezers', count: 2},
        { label: 'Washers', count: 1 },
        { label: 'Others', count: 27 }
    ];

    var width = 360;
    var height = 360;
    var radius = Math.min(width, height) / 2;
    var donutWidth = 30;

    var color =d3.scale.ordinal()
        .domain(["0", "1", "2","3","4","5","6","7","8","9","10","11","12","13"])
        .range(["#81CFE0", "#CF000F", "#4183D7","#59ABE3","#446CB3","#3498DB","#52B3D9","#1F3A93","#3A539B","#89C4F4","#4B77BE","#5C97BF","#19B5FE","#3498DB"]);

    var donutsvg = d3.select('#chart')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', 'translate(' + (width / 2) +
        ',' + (height / 2) + ')');

    var arc = d3.svg.arc()
        .innerRadius(radius - donutWidth)
        .outerRadius(radius);

    var pie = d3.layout.pie()
        .value(function(d) { return d.count; })
        .sort(null);

    var itext=d3.select("svg")
        .append("text")
        .attr("class","textvalue")
        .attr("x", "40")
        .attr("y", "180")
        .text("Energy Consumption")
        .attr("font-size", 31)
        .attr("font-family", "Tahoma")
        .attr("alignment-baseline", "middle")
        .style("fill", "#888888");

    var path = donutsvg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function(d, i) {return color(i);})
        .on("mouseover", function(d,i) {
            d3.selectAll("text.textvalue").remove();
            d3.select("svg")
                .append("text")
                .attr("class","textvalue")
                .attr("x", "40")
                .attr("y", "180")
                .text(function(){return d.data.label + ":" + d.data.count + "%";})
                .attr("font-size", 29)
                .attr("font-family", "Tahoma")
                .attr("alignment-baseline", "middle")
                .style("fill", "#888888")})
        .on("mouseout", function(){
            d3.selectAll("text.textvalue").remove();
            d3.select("svg")
                .append("text")
                .attr("class","textvalue")
                .attr("x", "40")
                .attr("y", "180")
                .text("Energy Consumption")
                .attr("font-size", 31)
                .attr("font-family", "Tahoma")
                .attr("alignment-baseline", "middle")
                .style("fill", "#888888");
        });
})(window.d3);
