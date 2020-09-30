/*
    Normal -> when html starts parsing and js is encountered and it blocks further parsing until its downlaoded and executed

    HTML              ----------------------            -------
    JS Download                             -------
    Exec JS                                        -----

    =============================================================================

    Async -> Downloading doesn't pause html parsing, but execution does
    HTML              -----------------------------     -----
    JS Download                             -------
    Exec JS                                        -----

    =============================================================================

    Defer -> First all of HTML is parsed, JS can be download in background, then its executed, in order of defining of scripts
    HTML              ----------------------------------
    JS Download                             -------
    Exec JS                                             ---

    =============================================================================


*/
