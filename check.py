import folium
map_osm = folium.Map(location=[41.878, -87.629], zoom_start=11)
# for coffeeshop in open_coffeeshops:
#     lt = coffeeshop.y
#     lg = coffeeshop.x
folium.Marker([41, 56], icon=folium.Icon(color='red',icon='info-sign')).add_to(map_osm)

map_osm.save("index.html")