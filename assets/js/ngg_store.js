var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

jQuery(function($){

// Store isn't working 100% for me. So disabling it for now.
store.enabled = false;

window.Ngg_Store = {
    driver: store.enabled ? store : new Persist.Store('ngg_store'),

    get: function(key){
        return this.driver.get(key);
    },

    set: function(key, value){
        if (typeof(value) == 'object') {
            value = JSON.stringify(value);
        }
        return this.driver.set(key, value);
    },

    del: function(key){
        this.driver.remove(key);
        return !this.has(key);
    },

    has: function(key){
        var value = this.get(key);
        return typeof(value) != 'undefined' && value != null;
    },

    save: function(){
        if (typeof(this.driver['save']) != 'undefined') {
            return this.driver.save();
        }
        else return true;
    }
};

$(window).unload(function(){
    Ngg_Store.save();
})

});


}
/*
     FILE ARCHIVED ON 21:41:04 Feb 13, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:30:31 Jun 16, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 139.297
  exclusion.robots: 0.185
  exclusion.robots.policy: 0.176
  RedisCDXSource: 2.069
  esindex: 0.01
  LoadShardBlock: 96.587 (3)
  PetaboxLoader3.datanode: 34.115 (4)
  CDXLines.iter: 37.427 (3)
  PetaboxLoader3.resolve: 53.466 (2)
  load_resource: 38.105
*/