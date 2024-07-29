![image](https://raw.githubusercontent.com/Pixelbite-CSS/.github/main/banner-yellow.png)

### v1.4.2
- Began public development
- Added base js main loop
- Added base css

### v1.5
- Upgraded main js loop
- Added custom font support
- Added components support
- Reformatted pixelbite object structure
- Changed base css

### v1.5.2
- Added components GitHub markdown support
- Changed base css

### v1.6
- Made library more (doesn't use pixelbite.update anymore)
- Fixed Component error popup
- Fixed Darkmode and changeTheme()
- Added configs support
    - Made it more better with it's own syntax
    - Made // and # comments work
    - Made Configs and Fontawesome support
    - Custom name components support
- Added Fontawesome support (custom link can be changed in pixelbite.fontawesome) 
- Changed Pixelbite Object's structure
- Added function alocatedPath() that replaces '@/' string with site's url
    - Changed object attributes to 'object_name:object'
- Added .noselect

### v1.7-alpha
- Added code inside of an Component "using ${\`code\`}"
    - `return [variable]` returns result as a HTML or Text format
    - Now works without a Component needed - try in DOM
- Added new features to configs 
    - Added nested variables - `${variables.[group].[child].[child]...}`
        - Using objects
- Added better dropdowns
- Added `hover:` support
- Added **full css** support
    - Now you can add any CSS style by replacing "-" with "_" since the PixelbiteCSS uses bunch "-" as a class splitter
- Added `hidden = [true/false]` attribute to hide Config info
- Added **hashed cookies**
    - Now you can store cookies and variables safely across sites (`getCookie(key)`, `setCookie(key, value)`)
    - Added new config variables - **[general]**
      - `cookie` - hashed cookie object
      - `cookie.encriptionkey` - password for encription *(need to change if using in private)*
      - `cookie.saltkey` - password for 2nd degree encription
      - `cookie.expiration` - expiration for cookies in days
      - `cookie.values` - decripted hashed cookie object
  - Now hashed cookies use _specific key_ for **specific machine** and **browser**
- Added `<button>` href support
- Added `theme[theme]:` prefix support
    - To change theme use `changeTheme(theme_name)`
- Updated configs
    - Added new `[tags]` support
        - Add classes to tags
    - Added new `[general] scripts` support
        - Add external scripts by using `scripts = [Array]` variable
    - Added new `[general] hidden_configs`
        - Set this variable to "true" to hide all configs/themes messages
    - Added auto config fill
        - If you are using externall configs/themes, the url will reffer to `*/config.conf` by default 
- Updated css
    - Added `<table>` support
- Bugfix
    - Components attributes are now case-insensitive
    - Class generator inside of the main loop was fixed
      - Faster load times and faster component load
