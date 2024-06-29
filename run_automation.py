import subprocess
import time 
import os 


# Path to the Adobe Premiere Pro executable on Windows
premiere_pro_path = 'C:\\Program Files\\Adobe\\Adobe Premiere Pro 2022\\Adobe Premiere Pro.exe'

# Path to the Premiere Pro project file 
project_path = 'path/to/your/project.prproj'

# Path to the ExtendScript file
extendscript_path = '/automate_premiere.jsx'

# Path to Adobe ExtendScript Toolkit executable
extendscript_toolkit = 'C:\\Program Files (x86)\\Adobe\\Adobe ExtendScript Toolkit CC\\ExtendScript Toolkit.exe'

# Run the ExtendScript
subprocess.run([extendscript_toolkit, extendscript_path])
