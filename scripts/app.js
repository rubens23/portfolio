var portfolios = [];

function Porfolio (arrayOfObjects){
  this.title = arrayOfObjects.title;
  this.description = arrayOfObjects.description;
  this.siteLink = arrayOfObjects.siteLink;
  this.githubLink = arrayOfObjects.githubLink;
};

Porfolio.prototype.toHtml = function(){
  var $source = $('#portfolio-template').html();
  var template = Handlebars.compile($source);
  return template(this);
};

myPortfolioData.forEach(function (projectObjects){
  portfolios.push(new Porfolio(projectObjects));
});

portfolios.forEach(function(newInstantiatedProjectObject){
  $('#portfolio').append(newInstantiatedProjectObject.toHtml());
});
