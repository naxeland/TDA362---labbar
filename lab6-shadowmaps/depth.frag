#version 420

// required by GLSL spec Sect 4.5.3 (though nvidia does not, amd does)
precision highp float;

layout(location = 0) out vec4 fragmentColor;

void main()
{
	fragmentColor = vec4(1.0f, 1.0f, 1.0f, 1.0f);
}
