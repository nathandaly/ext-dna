/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ExtDna.Application',

    name: 'ExtDna',

    requires: [
        // This will automatically load all classes in the ExtDna namespace
        // so that application classes do not need to require each other.
        'ExtDna.*'
    ],

    // The name of the initial view to create.
    mainView: 'ExtDna.view.main.Main'
});
