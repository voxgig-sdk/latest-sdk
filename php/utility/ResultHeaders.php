<?php
declare(strict_types=1);

// Latest SDK utility: result_headers

class LatestResultHeaders
{
    public static function call(LatestContext $ctx): ?LatestResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
