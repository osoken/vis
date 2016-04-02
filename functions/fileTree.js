
var fs = require('fs');

!(function()
{
  var fileTree = function(p, d)
  {
    try
    {
      var stat = fs.statSync(p +'/'+ d);
      if (stat.isDirectory())
      {
        return {
          'name':d,
          timestamp: stat.mtime.getTime(),
          children: fs.readdirSync(p+'/'+d).map(function(dd){return fileTree(p+'/'+d, dd)})
        };
      }
      if (stat.isFile())
      {
        return {'name':d, timestamp: stat.mtime.getTime(), size:stat.size};
      }
      return null;
    }
    catch (e)
    {
      console.log(e);
      return null;
    }
  }
  if (typeof define === "function" && define.amd) define(fileTree);
  else if (typeof module === "object" && module.exports) module.exports = fileTree;
  this.fileTree = fileTree;
}());
