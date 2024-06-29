// automate_premiere.jsx

var project = app.project;
var sequence = project.activeSequence;

// Function to import a file
function importFile(filePath) {
    app.project.importFiles([filePath]);
    return project.rootItem.children[project.rootItem.children.length - 1];
}

// Function to add the imported file to the sequence
function addToSequence(item) {
    var trackIndex = 1;
    var timeIn = sequence.end;
    sequence.videoTracks[trackIndex].insertClip(item, timeIn);
}

// Function to export the sequence
function exportSequence(outputPath) {
    var presetPath = '/path/to/your/export/preset.epr'; // Update this path
    var jobID = app.encoder.encodeSequence(sequence, outputPath, presetPath, 0);
}

// Main function
function main() {
    var filePath = '/project/import/video.mp4'; // Update this path
    var outputPath = '/project/export/output_video.mp4'; // Update this path

    var importedItem = importFile(filePath);
    addToSequence(importedItem);
    exportSequence(outputPath);
}

main();
