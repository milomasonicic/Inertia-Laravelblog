open project in Laragon

git clone 
composer install 
cp .env.example .env
php artisan key:generate

In order to  populate the database, run the following command:

php artisan migrate
php artisan db: seed

Admin will be created automatically. Admin name: admin email:admin.admin@gmail.com Admin password: 1234567890
