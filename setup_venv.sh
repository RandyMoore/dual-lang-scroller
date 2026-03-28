#!/bin/bash

# Check if script is being sourced
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    echo "Note: To activate the virtual environment in your current shell, run:"
    echo "  source setup_venv.sh"
    echo "or"
    echo "  . setup_venv.sh"
    echo ""
    echo "Running with ./setup_venv.sh will create the environment but exit before activation."
    echo ""
fi

# Check if virtual environment exists
if [ -d "venv" ]; then
    echo "Virtual environment already exists."
else
    echo "Creating virtual environment..."
    python3 -m venv venv

    if [ $? -eq 0 ]; then
        echo "Virtual environment created successfully."
    else
        echo "Failed to create virtual environment."
        exit 1
    fi
fi

# Activate virtual environment
. venv/bin/activate

# Verify activation
if [ "$VIRTUAL_ENV" != "$(pwd)/venv" ]; then
    echo "Warning: Virtual environment activation may not have worked correctly."
    echo "VIRTUAL_ENV is set to: $VIRTUAL_ENV"
    echo "Expected: $(pwd)/venv"
    exit 1
fi

