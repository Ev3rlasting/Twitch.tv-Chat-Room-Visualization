var JSONString;
var JSONObjects;
$.ajax({
  dataType: "json",
  url: "./frequency.json",
  success: function(data)
  {
    JSONString = JSON.stringify(data);
    JSONObjects = data;
    //console.log(JSONString);
  }
});
//var data = $.map(JSONObjects, function(el) { return el });
//var data = JSONString.stringify;
var data = [{"Timestamp":"1445570267494","Frequency":"0.6"},{"Timestamp":"1445570278504","Frequency":"1.8"},{"Timestamp":"1445570289634","Frequency":"1.2"},{"Timestamp":"1445570300425","Frequency":"0.8"},{"Timestamp":"1445570310429","Frequency":"1.2"},{"Timestamp":"1445570321496","Frequency":"0.9"},{"Timestamp":"1445570332690","Frequency":"1.3"},{"Timestamp":"1445570343424","Frequency":"1.5"},{"Timestamp":"1445570354139","Frequency":"0.6"},{"Timestamp":"1445570364758","Frequency":"1.4"},{"Timestamp":"1445570375423","Frequency":"1.1"},{"Timestamp":"1445570385699","Frequency":"0.6"},{"Timestamp":"1445570396891","Frequency":"0.9"},{"Timestamp":"1445570407965","Frequency":"0.7"},{"Timestamp":"1445570418475","Frequency":"0.5"},{"Timestamp":"1445570430718","Frequency":"0.5"},{"Timestamp":"1445570441474","Frequency":"0.5"},{"Timestamp":"1445570452423","Frequency":"0.5"},{"Timestamp":"1445570475521","Frequency":"0.1"},{"Timestamp":"1445570486470","Frequency":"0.5"},{"Timestamp":"1445570497920","Frequency":"0.7"},{"Timestamp":"1445570508539","Frequency":"0.6"},{"Timestamp":"1445570519425","Frequency":"0.7"},{"Timestamp":"1445570530423","Frequency":"0.4"},{"Timestamp":"1445570540421","Frequency":"0.7"},{"Timestamp":"1445570550789","Frequency":"0.3"},{"Timestamp":"1445570561964","Frequency":"0.3"},{"Timestamp":"1445570572539","Frequency":"0.7"},{"Timestamp":"1445570583587","Frequency":"0.3"},{"Timestamp":"1445570594507","Frequency":"0.5"},{"Timestamp":"1445570605745","Frequency":"0.9"},{"Timestamp":"1445570618204","Frequency":"1.1"},{"Timestamp":"1445570628834","Frequency":"0.4"},{"Timestamp":"1445570639422","Frequency":"0.7"},{"Timestamp":"1445570649422","Frequency":"0.4"},{"Timestamp":"1445570659438","Frequency":"0.9"},{"Timestamp":"1445570671183","Frequency":"0.4"},{"Timestamp":"1445570681613","Frequency":"0.5"},{"Timestamp":"1445570692699","Frequency":"0.2"},{"Timestamp":"1445570704415","Frequency":"0.3"},{"Timestamp":"1445570714419","Frequency":"0.3"},{"Timestamp":"1445570724576","Frequency":"0.5"},{"Timestamp":"1445570735904","Frequency":"0.1"},{"Timestamp":"1445570746703","Frequency":"0.5"},{"Timestamp":"1445570757464","Frequency":"0.6"},{"Timestamp":"1445570769273","Frequency":"0.6"},{"Timestamp":"1445570779833","Frequency":"0.4"},{"Timestamp":"1445570790652","Frequency":"1"},{"Timestamp":"1445570801417","Frequency":"0.2"},{"Timestamp":"1445570811417","Frequency":"0.2"},{"Timestamp":"1445570821416","Frequency":"0.8"},{"Timestamp":"1445570831420","Frequency":"0.3"},{"Timestamp":"1445570842806","Frequency":"0.4"},{"Timestamp":"1445570853415","Frequency":"0.3"},{"Timestamp":"1445570863738","Frequency":"0.4"},{"Timestamp":"1445570874722","Frequency":"0.6"},{"Timestamp":"1445570885417","Frequency":"0.8"},{"Timestamp":"1445570895652","Frequency":"0.4"},{"Timestamp":"1445570906417","Frequency":"0.9"},{"Timestamp":"1445570916414","Frequency":"0.5"},{"Timestamp":"1445570926617","Frequency":"0.6"},{"Timestamp":"1445570937417","Frequency":"0.4"},{"Timestamp":"1445570947415","Frequency":"0.3"},{"Timestamp":"1445570957910","Frequency":"0.6"},{"Timestamp":"1445570969344","Frequency":"0.2"},{"Timestamp":"1445570979595","Frequency":"0.4"},{"Timestamp":"1445570990802","Frequency":"0.5"},{"Timestamp":"1445571001711","Frequency":"0.3"},{"Timestamp":"1445571013211","Frequency":"0.9"},{"Timestamp":"1445571023416","Frequency":"0.5"},{"Timestamp":"1445571034289","Frequency":"0.3"},{"Timestamp":"1445571045085","Frequency":"0.4"},{"Timestamp":"1445571055412","Frequency":"0.6"},{"Timestamp":"1445571065865","Frequency":"0.4"},{"Timestamp":"1445571076500","Frequency":"0.2"},{"Timestamp":"1445571087541","Frequency":"0.8"},{"Timestamp":"1445571098478","Frequency":"0.8"},{"Timestamp":"1445571110157","Frequency":"0.3"},{"Timestamp":"1445571120413","Frequency":"0.3"},{"Timestamp":"1445571130414","Frequency":"0.7"},{"Timestamp":"1445571141410","Frequency":"0.7"},{"Timestamp":"1445571151879","Frequency":"0.4"},{"Timestamp":"1445571163126","Frequency":"0.6"},{"Timestamp":"1445571173891","Frequency":"0.8"},{"Timestamp":"1445571185291","Frequency":"0.3"},{"Timestamp":"1445571195632","Frequency":"0.2"},{"Timestamp":"1445571206482","Frequency":"0.1"},{"Timestamp":"1445571219954","Frequency":"0.3"},{"Timestamp":"1445571230576","Frequency":"0.4"},{"Timestamp":"1445571241409","Frequency":"0.2"},{"Timestamp":"1445571251706","Frequency":"0.6"},{"Timestamp":"1445571262408","Frequency":"0.5"},{"Timestamp":"1445571272412","Frequency":"0.9"},{"Timestamp":"1445571283408","Frequency":"0.6"},{"Timestamp":"1445571293903","Frequency":"0.4"},{"Timestamp":"1445571304889","Frequency":"0.2"},{"Timestamp":"1445571316375","Frequency":"0.2"},{"Timestamp":"1445571326528","Frequency":"0.1"},{"Timestamp":"1445571339950","Frequency":"0.2"},{"Timestamp":"1445571352948","Frequency":"0.2"},{"Timestamp":"1445571363557","Frequency":"0.3"},{"Timestamp":"1445571374410","Frequency":"0.3"},{"Timestamp":"1445571385452","Frequency":"0.2"},{"Timestamp":"1445571396557","Frequency":"0.2"},{"Timestamp":"1445571407462","Frequency":"0.6"},{"Timestamp":"1445571418722","Frequency":"0.5"},{"Timestamp":"1445571429405","Frequency":"0.5"},{"Timestamp":"1445571439599","Frequency":"0.3"},{"Timestamp":"1445571451626","Frequency":"0.2"},{"Timestamp":"1445571463133","Frequency":"0.3"},{"Timestamp":"1445571473901","Frequency":"0.2"},{"Timestamp":"1445571484899","Frequency":"0.3"},{"Timestamp":"1445571499270","Frequency":"0.3"},{"Timestamp":"1445571509616","Frequency":"1"},{"Timestamp":"1445571520406","Frequency":"0.8"},{"Timestamp":"1445571530406","Frequency":"1"},{"Timestamp":"1445571541330","Frequency":"0.8"},{"Timestamp":"1445571551971","Frequency":"2"},{"Timestamp":"1445571562404","Frequency":"0.9"},{"Timestamp":"1445571572624","Frequency":"0.9"},{"Timestamp":"1445571583614","Frequency":"0.7"},{"Timestamp":"1445571596548","Frequency":"0.4"},{"Timestamp":"1445571607406","Frequency":"0.6"},{"Timestamp":"1445571618567","Frequency":"1"},{"Timestamp":"1445571629405","Frequency":"1.1"},{"Timestamp":"1445571639403","Frequency":"1"},{"Timestamp":"1445571649406","Frequency":"0.7"},{"Timestamp":"1445571660405","Frequency":"0.8"},{"Timestamp":"1445571670402","Frequency":"0.3"},{"Timestamp":"1445571680738","Frequency":"0.2"},{"Timestamp":"1445571691406","Frequency":"1"},{"Timestamp":"1445571702660","Frequency":"0.5"},{"Timestamp":"1445571713402","Frequency":"0.3"},{"Timestamp":"1445571723894","Frequency":"0.4"},{"Timestamp":"1445571734402","Frequency":"0.4"},{"Timestamp":"1445571744567","Frequency":"0.5"},{"Timestamp":"1445571755426","Frequency":"0.5"},{"Timestamp":"1445571766880","Frequency":"0.3"},{"Timestamp":"1445571777404","Frequency":"0.6"},{"Timestamp":"1445571788933","Frequency":"0.4"},{"Timestamp":"1445571800246","Frequency":"0.1"},{"Timestamp":"1445571810399","Frequency":"0"},{"Timestamp":"1445571820398","Frequency":"0.2"},{"Timestamp":"1445571830532","Frequency":"0.5"},{"Timestamp":"1445571841639","Frequency":"0.5"},{"Timestamp":"1445571852408","Frequency":"0.9"},{"Timestamp":"1445571863777","Frequency":"1"},{"Timestamp":"1445571875715","Frequency":"0.4"},{"Timestamp":"1445571886891","Frequency":"0.4"},{"Timestamp":"1445571897863","Frequency":"0.7"},{"Timestamp":"1445571908401","Frequency":"0.6"},{"Timestamp":"1445571919896","Frequency":"0.5"},{"Timestamp":"1445571930528","Frequency":"0.5"},{"Timestamp":"1445571942043","Frequency":"2"},{"Timestamp":"1445571952496","Frequency":"1"},{"Timestamp":"1445571962497","Frequency":"1"},{"Timestamp":"1445571972497","Frequency":"0.9"},{"Timestamp":"1445571982500","Frequency":"1.2"},{"Timestamp":"1445571992504","Frequency":"0.4"},{"Timestamp":"1445572002504","Frequency":"0.2"},{"Timestamp":"1445572012504","Frequency":"0.5"},{"Timestamp":"1445572022509","Frequency":"0.1"},{"Timestamp":"1445572032510","Frequency":"0.6"},{"Timestamp":"1445572042514","Frequency":"0.5"},{"Timestamp":"1445572052514","Frequency":"1.2"},{"Timestamp":"1445572062514","Frequency":"0.8"},{"Timestamp":"1445572072515","Frequency":"0.3"},{"Timestamp":"1445572082515","Frequency":"0.3"},{"Timestamp":"1445572092520","Frequency":"0.9"},{"Timestamp":"1445572102523","Frequency":"0"},{"Timestamp":"1445572112523","Frequency":"0.3"},{"Timestamp":"1445572122524","Frequency":"0.1"},{"Timestamp":"1445572132525","Frequency":"0.3"},{"Timestamp":"1445572143393","Frequency":"0.6"}];
var base = data[0].Timestamp;
data.forEach(function(element){
  element.Timestamp = Math.round((parseInt(element.Timestamp)-base)/1000);
  //console.log(element);
});


  var vis = d3.select("#visualisation"),
  WIDTH = 1200,
  HEIGHT = 500,
  MARGINS = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 50
  },
  xScale = d3.scale.linear().range([MARGINS.left, WIDTH - MARGINS.right]).domain([0, 1876]),
  yScale = d3.scale.linear().range([HEIGHT - MARGINS.top, MARGINS.bottom]).domain([0, 2]),
  xAxis = d3.svg.axis()
  .scale(xScale),
  yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left");

  vis.append("svg:g")
  .attr("class", "x axis")
  .attr("transform", "translate(0," + (HEIGHT - MARGINS.bottom) + ")")
  .call(xAxis);
  vis.append("svg:g")
  .attr("class", "y axis")
  .attr("transform", "translate(" + (MARGINS.left) + ",0)")
  .call(yAxis);



  var lineGen = d3.svg.line()
  .x(function(d) {
    return xScale(d.Timestamp);
  })
  .y(function(d) {
    return yScale(d.Frequency);
  })
  .interpolate("line");

  var linepath = vis.append('svg:path')
  .attr('d', lineGen(data))
  .attr('stroke', 'green')
  .attr('stroke-width', 2)
  .attr('fill', 'none');
