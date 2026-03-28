from flask import Blueprint, jsonify
import os
import json

content_bp = Blueprint('content', __name__)

@content_bp.route('/api/content', methods=['GET'])
def get_content():
    """Get list of all content items"""
    content_items = []
    
    content_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'content')
    
    for lang_dir in ['en', 'es']:
        lang_path = os.path.join(content_dir, lang_dir)
        if os.path.exists(lang_path):
            for filename in os.listdir(lang_path):
                if filename.endswith('.txt'):
                    content_id = filename.replace('.txt', '')
                    content_path = os.path.join(lang_path, filename)
                    
                    try:
                        with open(content_path, 'r', encoding='utf-8') as f:
                            content_text = f.read()
                        
                        content_items.append({
                            'id': content_id,
                            'title': f'Content {content_id}',
                            'description': f'{lang_dir.upper()} content',
                            'contentA': content_text if lang_dir == 'en' else '',
                            'contentB': content_text if lang_dir == 'es' else ''
                        })
                    except Exception as e:
                        print(f"Error reading {content_path}: {e}")
    
    return jsonify(content_items)

@content_bp.route('/api/content/<content_id>', methods=['GET'])
def get_content_detail(content_id):
    """Get specific content item with both languages"""
    content_dir = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'content')
    
    content_a_path = os.path.join(content_dir, 'en', f'{content_id}.txt')
    content_b_path = os.path.join(content_dir, 'es', f'{content_id}.txt')
    
    content_a = ''
    content_b = ''
    
    try:
        with open(content_a_path, 'r', encoding='utf-8') as f:
            content_a = f.read()
    except FileNotFoundError:
        pass
    
    try:
        with open(content_b_path, 'r', encoding='utf-8') as f:
            content_b = f.read()
    except FileNotFoundError:
        pass
    
    if not content_a and not content_b:
        return jsonify({'error': 'Content not found'}), 404
    
    return jsonify({
        'id': content_id,
        'contentA': content_a,
        'contentB': content_b
    })