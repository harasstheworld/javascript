@echo off
:: This batch file will create an HTML Application (HTA).
:: Values entered in the HTA will be saved as %TEMP%\USERIN.BAT
:: After the USERIN.BAT is CALLed from the main batch 
:: (and assuming there is enough room in the environment)
:: environmental variables USERNAME and PASSWORD will be set.
:: It is your responsibility to delete the USERIN.BAT
:: after you CALL it. Because this batch file needs to
:: find itself, you must be sure to call it from your 
:: main batch file with a full path and file name.
:: Written and tested under Win95. NT/2000/XP users will
:: have to do some modifications before it will work.
:: For example, %0 changes to %f0
:: Public Domain. Use freely. No guarantees! It may not work!
:: http://www.ericphelps.com

cls
echo Please enter your user name and password in the entry box...
:: See if I can find myself
If not exist %0 goto ERROR
:: Make the web page
type %0 | find "    " | find /v "Not Me!" > %TEMP%\UserIn.hta
:: Run the vbs code
start /w %TEMP%\UserIn.hta
:: At this point a batch file "%TEMP%\UserIn.bat" exists and you should 
:: call it! If you don't call the batch file here and instead opt to
:: call it from another batch file, be sure NOT to delete it in the
:: "Clean up" code section below!
call %TEMP%\UserIn.bat
echo Your user name is %USERNAME%
echo Your password is %PASSWORD%
:: Clean up
del %TEMP%\UserIn.hta
del %TEMP%\UserIn.bat
goto DONE

:ERROR
cls
echo %0 is not the full path and file name
echo for the batch file. You MUST call this
echo batch file with a full path and file name.
goto DONE

:HTA
:: All HTA code MUST be indented four or more spaces.
:: NOTHING else in this batch file may be indented four spaces.
    <html>
    <head>
    <title>Password Entry</title>
    <hta:application>
    <script language="vbscript">
        window.resizeTo 250,200
        Sub SaveBatch()
            Set fs = CreateObject("Scripting.FileSystemObject")
            strFile = fs.GetAbsolutePathName(fs.BuildPath(fs.GetSpecialFolder(2), "UserIn.bat"))
            Set ts = fs.OpenTextFile(strFile, 2, True)
            ts.WriteLine "SET USERNAME=" & document.Forms(0).elements("username").value
            ts.WriteLine "SET PASSWORD=" & document.Forms(0).elements("password").value
            ts.Close
        End Sub
    </script>
    </head>
    <body>
    <form>
        User Name:
        <br><input type=text name=username tabindex=1>
        <br>Password:
        <br><input type=password name=password>
        <br><input type=button language="vbscript" value="OK"
        onclick="SaveBatch : Window.Close">
    </form>
    <script language=vbscript>
        document.Forms(0).elements("username").focus
    </script>
    </body>
    </html>

:DONE
