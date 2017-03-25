<?php
function getGenerator($batchSize = 10)
{
    $items = range(0, 999);
    $i = 0;
    while (true) {
        $offset = $batchSize * $i;
        $_items = array_slice($items, $offset, $batchSize);

        if (count($_items) == 0) {
            break;
        }
        $i ++;
        yield $_items;
    }
}

$g = getGenerator();
foreach ($g as $items) {
    print_r($items);
}
