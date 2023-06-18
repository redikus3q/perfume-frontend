call ng build --output-path docs --base-href /perfume-frontend/
TIMEOUT -T 1
copy docs\index.html docs\404.html