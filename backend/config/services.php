<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */
    'test_server' => [
        'access_token' => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTcxODA3LCJpYXQiOjE3MTUxNzE1MDcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjE5ZTZjY2VjLTRiOGYtNDU3MC04MGY1LWFjOWE5NmU3OTQyYSIsInN1YiI6InR1c2hhcnBhdGVrYXI0NUBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJTYW5qaXZhbmkiLCJjbGllbnRJRCI6IjE5ZTZjY2VjLTRiOGYtNDU3MC04MGY1LWFjOWE5NmU3OTQyYSIsImNsaWVudFNlY3JldCI6ImpmeEpzd3RRU2tBYkdub3ciLCJvd25lck5hbWUiOiJUdXNoYXIgU3VkaGFrYXIgUGF0ZWthciIsIm93bmVyRW1haWwiOiJ0dXNoYXJwYXRla2FyNDVAZ21haWwuY29tIiwicm9sbE5vIjoiVUlUMjFNMTA0OSJ9.asvF-xs-tgnWlHKvn_1p0rp8-uvcNnyicg5sK62-77k',
    ],

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
        'scheme' => 'https',
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

];
