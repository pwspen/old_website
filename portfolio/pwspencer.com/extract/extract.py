import os


def extract_between(s, first, second):
    start = s.find(first)
    if start == -1:
        return None  # First substring not found
    start += len(first)
    
    end = s.find(second, start)
    if end == -1:
        return None  # Second substring not found
    
    return s[start:end]

def extract_from_indexes():
    # Define the folder path where the index.html files are located
    folder_path = 'C:\\Users\\patri\\code\\website\\portfolio\\pwspencer.com\\extract'
    new_folder_path = 'C:\\Users\\patri\\code\\website\\portfolio\\projects'
    # Iterate over each file in the folder and its subfolders
    for root, dirs, files in os.walk(folder_path):
        for filename in files:
            if filename == 'index.html':
                file_path = os.path.join(root, filename)
                if '\\feed\\' in file_path:
                    continue
                date_and_name = extract_between(file_path, 'pwspencer.com\\extract\\', '\\index.html')
                print(date_and_name)
                yr, mo, day, projname = date_and_name.split('\\')

                with open(file_path, 'r', encoding='utf-8') as file:
                    lines = file.readlines()

                # Find the start and end indices of the desired lines
                start_index = None
                end_index = None
                for i, line in enumerate(lines):
                    if 'entry-content' in line:
                        start_index = i
                    if 'jp-post' in line:
                        end_index = i
                        break

                # Extract the desired lines 
                extracted_lines = lines[start_index:end_index]

                extracted_lines.insert(0, f'<div style="font-size: 30px; font-weight: bold; line-height: 1.5;">\n'
                                       f'<span>Written on {mo}/{day}/{yr}. Ported from WordPress, sorry for broken formatting!</span><br />\n'
                                       f'<a href=../../../Portfolio > Portfolio </a><br />\n'
                                       f'<a href=../../../Resume> Resume </a><br /><br />\n'
                                       f'</div>\n'
                                       )
                # data-orig-file="https://patrickwspencer7973e68df9.files.wordpress.com/2022/08/indet.png" data-orig-size
                for line in extracted_lines:
                    if '<figure class="wp-block-image size-large">' in line:
                        # below should give "2022/08/indet.png"
                        imgpath = extract_between(line, 'data-orig-file="https://patrickwspencer7973e68df9.files.wordpress.com/', '" data-orig-size=')
                        extracted_lines[extracted_lines.index(line)] = f"<img src=../../imgs/{imgpath}>\n"

                # Create a new index.html file with the extracted lines
                new_file_path = os.path.join(new_folder_path, projname)
                try:
                    os.mkdir(new_file_path)
                except FileExistsError:
                    pass
                new_file_path = os.path.join(new_folder_path, f'{projname}\\index.html')
                with open(new_file_path, 'w', encoding='utf-8') as file:
                    file.writelines(extracted_lines)


def rename_files_in_folder(folder_path, old_extension):
    # Ensure the folder path is valid
    if not os.path.isdir(folder_path):
        print("Folder not found")
        return

    # Loop over all files in the directory
    for root, dirs, files in os.walk(folder_path):
        for filename in files:
            if filename.endswith(old_extension):
                # Construct the new file name
                new_filename = f"{filename[:-8]}{old_extension}"
                print(new_filename)
                old_file = os.path.join(root, filename)
                new_file = os.path.join(root, new_filename)

                # Rename the file
                os.rename(old_file, new_file)

# Usage
folder = "C:\\Users\\patri\\code\\website\\portfolio\\imgs"  # Replace with your folder path
extension = ".png"  # Replace with the desired file extension

# rename_files_in_folder(folder, extension)

extract_from_indexes()