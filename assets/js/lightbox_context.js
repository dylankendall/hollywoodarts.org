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

function nextgen_lightbox_filter_selector($, selector) 
{
		if (nextgen_lightbox_settings && nextgen_lightbox_settings.context) {
			var context = nextgen_lightbox_settings.context;
			
			if (context == 'all_images') {
				 selector = selector.add($('a > img').parent());
			}
			else if (context == 'all_images_direct') {
				selector = selector.add($('a[href] > img').parent()
				 		.filter(function() {
							var href = $(this).attr('href').toLowerCase();
							var ext = href.substring(href.length - 3);
							var ext2 = href.substring(href.length - 4);
							
							return (ext == 'jpg' || ext == 'gif' || ext == 'png' || ext2 == 'tiff' || ext2 == 'jpeg');
						}));
			}
			else if (context == 'nextgen_and_wp_images') {
				 selector = selector.add($('a > img[class*="wp-image-"]').parent());
			}
			
			selector = selector.not('.gallery_link');
		}
		
		return selector;
}


}
/*
     FILE ARCHIVED ON 21:40:44 Feb 13, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 08:30:47 Jun 16, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 233.139
  load_resource: 55.263
  exclusion.robots.policy: 0.224
  RedisCDXSource: 1.868
  LoadShardBlock: 204.161 (3)
  exclusion.robots: 0.234
  esindex: 0.01
  PetaboxLoader3.datanode: 137.522 (4)
  PetaboxLoader3.resolve: 39.835
  CDXLines.iter: 23.988 (3)
*/